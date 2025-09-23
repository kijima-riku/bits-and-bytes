import Script from "next/script"

type Json =
    | string | number | boolean | null
    | { [key: string]: Json }
    | Json[]

interface StructuredDataProps {
    data: Json
}

export function StructuredData({ data }: StructuredDataProps) {
    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
