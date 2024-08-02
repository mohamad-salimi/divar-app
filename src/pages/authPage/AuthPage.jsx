import { useState } from "react";
import CheckOtpForm from "components/template/checkOtpForm/CheckOtpForm";
import SendOtpForm from "components/template/sendOtpForm/SendOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 ? (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      ) : (
        <CheckOtpForm
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default AuthPage;
