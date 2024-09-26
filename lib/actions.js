"use server"

import { redirect } from "next/navigation";

export const Login = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    redirect("/")
}