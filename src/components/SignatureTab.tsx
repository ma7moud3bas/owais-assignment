import { updateApplication } from "@/lib/apiHelpers";
import { CustodianApplication } from "@/lib/types";
import Link from "next/link";
import { FC, useState } from "react";

type Props = {
    application: CustodianApplication;
    onSave: () => void;
}

const SignatureTab: FC<Props> = (props) => {
    const { application, onSave } = props;

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSave()
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="bg-white/50 col-span-1 lg:col-span-3 xl:col-span-5 shadow-sm flex flex-col items-start w-full py-6 px-7">
            <h2 className="text-lg font-semibold text-primary">Certification</h2>
            <div className="bg-[#D9D9D9]/20 p-5 pb-7 mt-4 flex flex-col gap-y-4">
                <p className="text-sm text-[#272830] leading-6">I hereby certify the information that I have provided in this subscription form is valid, correct, and complete, and an integral part of this subscription form, and XYZ Capital in its capacity as the "Fund Manager" has the full right to rely on such data and information.</p>
                <p className="text-sm text-[#272830] leading-6">
                    The applicant confirms that they have read and understood the Terms and Conditions of the Fund, and accepts and agrees to what is stated therein irrevocably and unconditionally.
                </p>
                <p className="text-sm text-[#272830] leading-6">
                    The applicant agrees to participate in the Fund with the number of units specified in This subscription form submitted by XYZ Capital in accordance with the provisions of the Investment Funds Regulations issued by the Capital Market Authority in the Kingdom of Saudi Arabia, and the payment of the subscription value in accordance with the Terms and Conditions and this subscription form.
                </p>
                <p className="text-sm text-[#272830] leading-6">
                    The applicant acknowledges that they fulfill all the requirements stipulated in the Terms and Conditions. Accordingly, by accepting the Fund Manager to the signed subscription form, they will become legally bound by all the terms, conditions, and documents related to it and to the offering of the Fund's units, and this subscription form is subject to all the provisions stipulated in the Terms and Conditions of the Fund.
                </p>
            </div>
            <div className="flex mt-6 gap-x-2.5 items-center ">
                <input required className="accent-[#D9D9D9] outline-none border-none h-5 w-5 default:appearance-none  bg-[#D9D9D9] text-white" type="checkbox" name="consent" id="consent_checkbox" />
                <label className="text-primary text-sm leading-6 " htmlFor="consent_checkbox">Please tick the box to certify.</label>
            </div>
            <h2 className="mt-8 text-primary text-xl font-semibold">Digitally Certify Document</h2>
            <p className="text-primary text-sm leading-5 mt-1 tracking-wide">
                You can click on the below button it will redirect to a platform where you can E-Sign the document to <br /> certify the details and the contract with XYZ.Capital
            </p>

            <Link href={"https://xyz.capital"} className="w-full mt-8 lg:w-[300px] py-3.5 bg-primary border text-white flex items-center justify-center font-semibold">E-Sign Document</Link>

            <div className="mt-16 flex w-full max-lg:flex-col items-center lg:justify-end gap-x-5 gap-y-5">
                <button type="button" className="w-full lg:w-[180px] py-3.5 bg-white/80 border border-primary text-primary flex items-center justify-center font-semibold">Cancel</button>
                <button type="submit" className="w-full lg:w-[180px] py-3.5 bg-primary border text-white flex items-center justify-center font-semibold">{loading ? "Loading..." : "Save"}</button>
            </div>
            {error && <p className="text-red-500 mt-5">{error}</p>}
        </form>
    );
}

export default SignatureTab;