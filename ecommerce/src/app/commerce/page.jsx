"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { getCookie } from "@/lib/cookie";

export default function Commerce() {
    const router = useRouter();

    useEffect(() => {
        if (!getCookie("jssessid")) {
            router.push("/users");
        }
    }, [router]);

    return (
        <>
        </>
    );
}
