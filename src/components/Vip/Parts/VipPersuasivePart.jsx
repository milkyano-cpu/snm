import Button from "../../Button";

import CrownIcon from "@/src/icons/CrownIcon";

export default function VipPersuasivePart() {
  return (
    <div className="flex flex-col gap-16 py-20">
      <div className="mx-auto flex max-w-67 flex-col gap-8 text-center text-2xl">
        <h2 className="font-semibold">
          Want to be considered for VIP Display?
        </h2>
        <p>Submit your details when registering!</p>
      </div>
      <div className="flex justify-center">
        <Button
          icon={<CrownIcon className="h-10 w-10 text-white" />}
          text="APPLY FOR VIP DISPLAY"
          href="#registration-form"
        />
      </div>
    </div>
  );
}
