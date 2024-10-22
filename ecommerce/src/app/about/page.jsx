"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import MemberCard from "@/components/MemberCard"

export default function AboutUs() {
    const [teamData, setTeamData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch("/api/team");
                if (!response.ok) {
                    console.error("OOPS");
                }
                const data = await response.json();
                setTeamData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchTeamData();
    }, []);

    return (
        <>
            <Header />
            <main className="container mx-auto my-8 grid grid-flow-row lg:grid-flow-col gap-6 justify-evenly">
                {teamData?.map((member)=>(
                    <MemberCard
                    key={member.id}
                    name={member.full_name}
                    role={member.role}
                    description={member.description}
                    profileUrl={member.pfp_url}
                    />
                ))}
            </main>
        </>
    );
}