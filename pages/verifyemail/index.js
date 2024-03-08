// Import necessary modules
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const verifyUserEmail = async () => {
        try {
            let res = await fetch("/api/verifyemail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });
            let response = await res.json();
            console.log(response);

            setVerified(true);
        } catch (error) {
            setError(true);
        }
    }

    console.log(JSON.stringify({ token }));
    console.log(verified);

    useEffect(() => {
        const urlToken = router.query.token;
        setToken(urlToken || "");
    }, [router.query.token]);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="container">
            <h1 className="text-center">Verify Email</h1>
            {verified && (
                <div className="alert alert-success">
                    Your email has been verified. You can now <Link href="/login">login</Link>
                </div>
            )}
            {error && (
                <div className="alert alert-danger">
                    Some error occurred. Please try again later.
                </div>
            )}
            <style jsx>{`
        .container {
          background: #212529;
          width:100%;
          height:500px;
          borderRadius: 10px;
        }
        p {
          color: blue;
        }
      `}</style>
        </div>
    );
}
