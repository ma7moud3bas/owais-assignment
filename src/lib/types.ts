export type CustodianApplication = {
    title: string
    id: string
    name: string
    accountName: string
    accountNumber: string
    address: string
    additionalData: {
        certificateRecipient: OptionalRecipientTypes<RecipientTypes>
        profitsRecipient: OptionalRecipientTypes<RecipientTypes>
        salesRecipient: OptionalRecipientTypes<RecipientTypes>
    }
    status: "pending" | "under review" | "submitted" | "approved" | "rejected"
    created_at: string
    updated_at: string
}

type RecipientTypes = "client" | "custodian" | "other"
type OptionalRecipientTypes<T> = T extends "other" ? { type: RecipientTypes, name: string } : { type: RecipientTypes }


type ErrorResponseType = {
    success: false
    error: string
}

type SuccessResponseType<T> = {
    success: true
    data: T
}

export type ResponseType<T> = ErrorResponseType | SuccessResponseType<T>