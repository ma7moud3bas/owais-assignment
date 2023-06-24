import { updateApplication } from "@/lib/apiHelpers";
import { CustodianApplication } from "@/lib/types";
import { FC, useState } from "react";

type Props = {
    application: CustodianApplication;
    onSave: () => void;
}

const OtherInformationTab: FC<Props> = (props) => {
    const { application, onSave } = props;

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setError(null);
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // check if other field is selected and empty
        if (
            (data.certificates_group === "other" && !data.certificates_other)
            || (data.profits_group === "other" && !data.profits_other)
            || (data.sales_group === "other" && !data.sales_other)
        ) {
            setError("Please enter the name of the other entities");
            setLoading(false);
            return;
        }

        // add data conditionally
        const additional_info = {
            certificatesRecipient: {
                type: data.certificates_group as string,
                ...(data.certificates_group === "other" ? { name: data.certificates_other as string } : {})
            },
            profitsRecipient: {
                type: data.profits_group as string,
                ...(data.profits_group === "other" ? { name: data.profits_other as string } : {})
            },
            salesRecipient: {
                type: data.sales_group as string,
                ...(data.sales_group === "other" ? { name: data.sales_other as string } : {})
            }
        }

        const newData: CustodianApplication = {
            ...application,
            // @ts-ignore
            additionalData: {
                ...application.additionalData,
                ...additional_info,
            }
        }

        const res = await updateApplication(application.id, newData);
        if (res.success) {
            onSave();
        } else {
            setError(res.error);
        }
        setLoading(false);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="bg-white/50 col-span-1 lg:col-span-3 xl:col-span-5 shadow-sm flex flex-col w-full py-6 px-7">
            <h2 className="text-lg font-semibold text-primary">Other Information</h2>
            <h3 className="font-medium text-[#272830] leading-8">Where do you want to send the following:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-8 mt-6">
                <fieldset className="flex flex-col" id="certificates_group">
                    <label className="font-medium text-[#272830]" htmlFor="certificates_group">Certificates</label>
                    <div className="radio-input-group flex items-center gap-x-5 mt-5">
                        <div className="flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="client" name="certificates_group" required />
                            <span className="text-sm">Client</span>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="custodian" name="certificates_group" />
                            <span className="text-sm">Custodian</span>
                        </div>
                        <div className="other-radio-button flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="other" name="certificates_group" />
                            <span className="text-sm">Other Entity</span>
                        </div>
                    </div>
                    <input name={"certificates_other"} placeholder="Other Entity" className="other-input invisible mt-4 w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary" type="text" />
                </fieldset>
                <fieldset className="flex flex-col" id="profits_group">
                    <label className="font-medium text-[#272830]" htmlFor="profits_group">Profits or any other Income</label>
                    <div className="radio-input-group flex items-center gap-x-5 mt-5">
                        <div className="flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="client" name="profits_group" required />
                            <span className="text-sm">Client</span>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="custodian" name="profits_group" />
                            <span className="text-sm">Custodian</span>
                        </div>
                        <div className="other-radio-button flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="other" name="profits_group" />
                            <span className="text-sm">Other Entity</span>
                        </div>
                    </div>
                    <input name={"profits_other"} placeholder="Other Entity" className="other-input invisible mt-4 w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary" type="text" />
                </fieldset>
                <fieldset className="flex flex-col" id="sales_group">
                    <label className="font-medium text-[#272830]" htmlFor="sales_group">Sales Outcomes</label>
                    <div className="radio-input-group flex items-center gap-x-5 mt-5">
                        <div className="flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="client" name="sales_group" required />
                            <span className="text-sm">Client</span>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="custodian" name="sales_group" />
                            <span className="text-sm">Custodian</span>
                        </div>
                        <div className="other-radio-button flex items-center gap-x-2.5 text-primary">
                            <input className="accent-primary h-[16px] w-[16px]" type="radio" value="other" name="sales_group" />
                            <span className="text-sm">Other Entity</span>
                        </div>
                    </div>
                    <input name={"sales_other"} placeholder="Other Entity" className="other-input invisible mt-4 w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary" type="text" />
                </fieldset>
            </div>
            <div className="mt-16 flex w-full max-lg:flex-col items-center lg:justify-end gap-x-5 gap-y-5">
                <button type="button" className="w-full lg:w-[180px] py-3.5 bg-white/80 border border-primary text-primary flex items-center justify-center font-semibold">Cancel</button>
                <button type="submit" className="w-full lg:w-[180px] py-3.5 bg-primary border text-white flex items-center justify-center font-semibold">{loading ? "Loading..." : "Save"}</button>
            </div>
            {error && <p className="text-red-500 mt-5">{error}</p>}
        </form>
    );
}

export default OtherInformationTab;