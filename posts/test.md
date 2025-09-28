---
title: "DNS resolve"
description: "How a domain is resolved on a network"
date: "2025-09-28 23:00"
tags: ["DNS", "Network", "Infrastructure"]
---

## What is DNS?

DNS (Domain Name System) translates human-readable names (like `hoge.com`) into IP addresses (like `0.0.0.0`) so browsers can find servers.

---

## Terms

### A (Address) record

- `A record` ties your domain to an IP address(**IPv4**).
- Example:

    ```
    // map apex(root) domain to an IP address.
    // hoge.com ↔︎ 0.0.0.0
    @     A     0.0.0.0
    
    // map subdomain to an IP address.
    // www.hoge.com ↔︎ 1.1.1.1
    www   A     1.1.1.1
    ```


### AAAA record

- `AAAA record` ties your domain to an IP address(**IPv6**).
- Can be published **together** with A for ***dual-stack**. (*There is a description below.)

    ```
    // map apex(root) domain to an IP address.
    // hoge.com ↔︎ 2001:db8::1
    @     AAAA  2001:db8::1
    ```


### CNAME (Canonical Name)

- `CNAME` aliases one domain → **another domain** (not an IP).
- Resolver follows the alias chain until it reaches A/AAAA record.
- Rules:
    - A label with a **CNAME cannot have any other records**.
    - **Don’t use CNAME at the apex** (root) in standard DNS.

    ```
    // map domain to another domain.
    // www.hoge.com → huga.com
    www   CNAME  huga.com
    ```


---

## Apex (Root) Domain

- The top of your zone (e.g., `example.com`), often shown as `@`.
- Use **A** / AAAA record. Avoid CNAME at apex.
- Typical hosting pattern:

    ```
    @     A      <provider IPv4>          ; apex
    www   CNAME  <provider target name>   ; human-friendly host
    ```


---

## Dual-Stack (IPv4 + IPv6)

- **Meaning:** The same hostname is reachable over both IPv4 and IPv6.
- **DNS shape:** Publish **both** A and AAAA for the same name.

    ```
    // map one domain to both of IPv4 and IPv6
    www.hoge.com  A     203.0.113.10
    www.hoge.com  AAAA  2001:db8::1234
    ```

- **Client behavior:** Modern systems try IPv6 and IPv4 nearly in parallel and use whichever connects first.
- **Note:** Some hosts don’t support AAAA on custom domains. If so, use only A for now and add AAAA when supported.

---

## Multiple Records for One Name

- A hostname can have **multiple A** and/or **multiple AAAA** records.
- Reasons: redundancy, load sharing, geo routing, canary/blue-green.

---

## How DNS Lookups Work (Servers & Steps)

### The players

- **Stub resolver (your device)** → asks a **recursive resolver** (ISP/company/1.1.1.1/8.8.8.8).
- **Recursive resolver** → does the work and **caches** answers.
- **Root servers** → know where each **TLD** (e.g., `.com`, `.app`) is delegated.
- **TLD servers** → know which **authoritative nameservers** serve `example.com`.
- **Authoritative nameserver** → returns the actual records (A/AAAA/CNAME/MX/TXT, etc.).

### Cold resolution path (nothing cached)

1. **Root** → “Where is `.com`?” → returns **NS** for `.com` (with glue).
2. **TLD (`.com`)** → “Where is `example.com`?” → returns **NS** for `example.com` (with glue).
3. **Authoritative for `example.com`** → returns **A/AAAA** (or a **CNAME**, which then triggers more lookups for the target).

> With caching, many of these steps are skipped. You don’t always make “exactly three steps” for a second-level name like example.com.
>

If it is cached, there are fewer 3 steps. On the other hand, if it isn’t cached and authoritative server returns CNAME, there are more that 3 steps(resolve it resurvice).

---

## Quick Checks (with `dig`)

```bash
// show the A/AAAA records.
dig +short A example.com
dig +short AAAA example.com

// show the CNAME(other domains)
dig +short CNAME www.example.com
```

---

## caveats

- **CNAME at apex** (unless your DNS provider offers ALIAS/ANAME).