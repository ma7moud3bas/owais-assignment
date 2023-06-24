import { CustodianApplication } from "@/lib/types";
import { FC } from "react";

type formsProps = {
    data: CustodianApplication[];
    status: "approved" | "pending";
    changeStatus: (status: formsProps["status"]) => void;
}

const FormsTable: FC<formsProps> = (props) => {
    const { data: custodianApplications, status, changeStatus } = props
    return (
        <div>

        </div>
    )
}

export default FormsTable