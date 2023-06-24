import { updateApplication } from "@/lib/apiHelpers";
import { CustodianApplication } from "@/lib/types";
import { FC, useState } from "react";

type Props = {
    application: CustodianApplication;
    onSave: () => void;
}

const DetailsTab: FC<Props> = (props) => {
    const { application, onSave } = props;

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setError(null);
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const newData: CustodianApplication = {
            ...application,
            accountName: data.account_name as string,
            accountNumber: data.account_number as string,
            address: data.address as string,
            name: data.name as string,
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
            <h2 className="text-lg font-semibold text-primary">Custodian Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-8 mt-6">
                <input name="name" required className='w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary' placeholder="Name *" type="text" />
                <input name="address" required className='w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary' placeholder="Address of Correspondence *" type="text" />
                <input name="account_name" required className='w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary' placeholder="Account Name *" type="text" />
                <input name="account_number" required className='w-full  text-sm py-3 px-4 text-primary placeholder:text-primary border border-[#D0D0D0] focus:outline-primary appearance-none ' placeholder="Account Number *" type="number" />
            </div>
            <div className="mt-16 flex w-full max-lg:flex-col items-center lg:justify-end gap-x-5 gap-y-5">
                <button type="button" className="w-full lg:w-[180px] py-3.5 bg-white/80 border border-primary text-primary flex items-center justify-center font-semibold">Cancel</button>
                <button type="submit" className="w-full lg:w-[180px] py-3.5 bg-primary border text-white flex items-center justify-center font-semibold">{loading ? "Loading..." : "Save"}</button>
            </div>
            {error && <p className="text-red-500 mt-5">{error}</p>}
        </form>
    );
}

export default DetailsTab;