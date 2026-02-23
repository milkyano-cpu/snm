import Button from "@/components/Button";
import InputWrapper from "./InputWrapper";
import GalleryIcon from "@/icons/GalleryIcon";

export default function FormPart() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <InputWrapper label={{ text: "First Name", id: "firstName" }}>
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="firstName"
          />
        </InputWrapper>
        <InputWrapper label={{ text: "Last Name", id: "lastName" }}>
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="lastName"
          />
        </InputWrapper>
        <InputWrapper
          label={{ text: "(Country Code) Whatsapp Number", id: "phoneNumber" }}
        >
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="phoneNumber"
          />
        </InputWrapper>
        <InputWrapper
          label={{
            text: "Your Instagram Username/Link",
            id: "instagramAccount",
          }}
        >
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="instagramAccount"
          />
        </InputWrapper>
        <InputWrapper label={{ text: "How old are you", id: "age" }}>
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="age"
          />
        </InputWrapper>
        <InputWrapper
          label={{
            text: "Is your Vehicle a Car, Bike, or both?",
            id: "vehiclePreference",
          }}
        >
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="vehiclePreference"
          />
        </InputWrapper>
        <InputWrapper
          label={{ text: "What is the brand?", id: "vehicleBrand" }}
        >
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="vehicleBrand"
          />
        </InputWrapper>
        <InputWrapper
          label={{ text: "What is the model?", id: "vehicleModel" }}
        >
          <input
            type="text"
            className="w-full rounded-lg bg-white px-3 py-4 text-black"
            id="vehicleModel"
          />
        </InputWrapper>
      </div>
      <Button
        text="GET MY EVENT PHOTOS"
        icon={<GalleryIcon className="h-10 w-10 text-white" />}
        className="self-start"
      />
    </div>
  );
}
