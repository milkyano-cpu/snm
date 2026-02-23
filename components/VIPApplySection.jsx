import CrownIcon from "@/icons/CrownIcon";
import Button from "./Button";

export function VIPApplySection() {
    return (
        <section className="container flex flex-col gap-48">
            <div className="text-center flex flex-col gap-12">
                <h3 className="font-bold text-3xl">
                    Want to be considered for
                    <br />
                    VIP Display?
                </h3>
                <p className="text-3xl">
                    Submit your details
                    <br />
                    when registering!
                </p>
            </div>
            <div className="flex justify-center">
                <Button icon={<CrownIcon className="text-white h-10 w-10" />} text="APPLY FOR VIP DISPLAY" href="#registration-form" />
            </div>
        </section>
    );
}
