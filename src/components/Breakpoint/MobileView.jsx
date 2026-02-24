import { RegistrationFormV3 } from "../RegistrationForm/RegistrationFormV3";

export default function MobileView() {
  return (
    <div className="block md:hidden">
      <section className="bg-entire px-4 py-10">
        <RegistrationFormV3 />
      </section>
    </div>
  );
}
