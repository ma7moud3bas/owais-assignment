export type CustodianApplication = {
    id: string
    name: string
    AccountName: string
    AccountNumber: string
    address: string
    additionalData: {
        certificateRecipient: OptionalRecipientTypes<RecipientTypes>
        profitsRecipient: OptionalRecipientTypes<RecipientTypes>
        salesRecipient: OptionalRecipientTypes<RecipientTypes>
    }
    status: "pending" | "under_review" | "submitted" | "approved" | "rejected"
    date: string
}

type RecipientTypes = "client" | "custodian" | "other"
type OptionalRecipientTypes<T> = T extends "other" ? { type: RecipientTypes, name: string } : { type: RecipientTypes }


