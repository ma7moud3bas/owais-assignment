import { CustodianApplication } from "@/lib/types";
import { FC } from "react";
import FormTableApplicationActions from "./FormsTableApplicationActions";

type formsProps = {
    data: CustodianApplication[];
    statusFilter: "approved" | "pending";
    changeStatus: (status: formsProps["statusFilter"]) => void;
    status: 'idle' | 'loading' | 'success' | 'error';
}
const dateToString = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, { month: "long", day: "2-digit", year: "numeric" })
}

const FormsTable: FC<formsProps> = (props) => {
    const { data: custodianApplications, status, statusFilter, changeStatus } = props
    return (
        <div className="bg-white/50 flex flex-col mt-2.5 items-center w-full shadow">
            <div id="status_filter" className="flex w-full items-center justify-center pt-8 pb-5">
                <div className="flex">
                    <button className={`px-5 py-3 font-semibold ${statusFilter === "approved" ? "bg-primary text-white" : "bg-white text-primary"}`} onClick={() => { changeStatus("approved") }}>Approved</button>
                    <button className={`px-5 py-3 font-semibold ${statusFilter === "pending" ? "bg-primary text-white" : "bg-white text-primary"}`} onClick={() => { changeStatus("pending") }}>Pending</button>
                </div>
            </div>
            <div className="w-full overflow-auto" >
                {
                    (status === "loading") && <div className="flex justify-center items-center h-96"><p className="text-2xl font-semibold">Loading...</p></div>
                }

                {
                    (status === "error") && <div className="flex justify-center items-center h-96"><p className="text-2xl font-semibold">Error...</p></div>
                }

                {
                    (status === "success") &&
                    <table className="table-auto w-full overflow-auto">
                        <thead>
                            <tr className="bg-primary text-white text-xs">
                                <th className="text-left py-4 px-6 font-medium">ID</th>
                                <th className="text-left py-4 px-6 font-medium">Form Title</th>
                                {
                                    statusFilter === "approved" ?
                                        <>
                                            <th className="text-left py-4 px-6 font-medium">Date</th>
                                        </>
                                        :
                                        <>
                                            <th className="text-left py-4 px-6 font-medium">Generated On</th>
                                            <th className="text-left py-4 px-6 font-medium">Status</th>
                                        </>
                                }
                                <th className="text-right py-4 px-6 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {custodianApplications.map((application) =>
                                <tr className="bg-white text-primary text-sm border-b border-gray-100" key={application.id}>
                                    <td className="text-left py-4 px-6 font-medium">{application.id}</td>
                                    <td className="text-left py-4 px-6 font-medium">{application.name}</td>
                                    {
                                        statusFilter === "approved" ?
                                            <>
                                                <td className="py-4 px-6 font-medium text-left">{dateToString(application.created_at)}</td>
                                            </>
                                            :
                                            <>
                                                <td className="py-4 px-6 font-medium text-left">{dateToString(application.created_at)}</td>
                                                <td className="py-4 px-6 font-medium text-left flex">
                                                    <div className={`bg-grey/10 p-1.5 w-auto capitalize text-sm ${application.status === "pending" ? "text-green-400" : "text-yellow-400"}`}>
                                                        {application.status}
                                                    </div>
                                                </td>
                                            </>
                                    }
                                    <td className="py-1 px-6 font-medium text-right">
                                        <FormTableApplicationActions application={application} />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default FormsTable