import { host } from "./constants"
import { delay } from "./helpers"
import { CustodianApplication, ResponseType } from "./types"
console.log(host)
export const getApplication = async (id: string): Promise<ResponseType<{ application: CustodianApplication }>> => {
    const res = await fetch(`${host}/api/applications/${id}`)
    await delay(1000)
    const data = await res.json()
    return data
}

export const getApplications = async (status?: "approved" | "pending"): Promise<ResponseType<{ applications: CustodianApplication[] }>> => {
    const res = await fetch(`${host}/api/applications?status=${status}`)
    const data = await res.json()
    return data
}

export const updateApplication = async (id: string, application: CustodianApplication): Promise<ResponseType<{ application: CustodianApplication }>> => {
    const res = await fetch(`${host}/api/applications/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ application }),
    })
    await delay(1000)
    const data = await res.json()
    return data
}

export const createApplication = async (application: CustodianApplication): Promise<ResponseType<{ application: CustodianApplication }>> => {
    const res = await fetch(`${host}/api/applications`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ application }),
    })
    await delay(1000)
    const data = await res.json()
    return data
}

export const deleteApplication = async (id: string): Promise<ResponseType<{ application: CustodianApplication }>> => {
    const res = await fetch(`${host}/api/applications/${id}`, {
        method: "DELETE",
    })
    await delay(1000)
    const data = await res.json()
    return data
}