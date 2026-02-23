import CrownIcon from "@/src/icons/CrownIcon";
import Button from "./Button";

export function VIPApplySection() {
  return (
    <section className="container flex flex-col gap-48">
      <div className="flex flex-col gap-12 text-center">
        <h3 className="text-3xl font-bold">
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
        <Button
          icon={<CrownIcon className="h-10 w-10 text-white" />}
          text="APPLY FOR VIP DISPLAY"
          href="#registration-form"
        />
      </div>
    </section>
  );
}
