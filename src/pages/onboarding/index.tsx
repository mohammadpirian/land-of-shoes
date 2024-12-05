import { useState } from "react";
import Loading from "../../modules/onboarding/loading";
import WelcomePage from "../../modules/onboarding/welcomePage";
import Boarding from "../../modules/onboarding/boarding";

const Onboarding = () => {
  const [page, setPage] = useState(2);

  return (
    <>
      {page === 0 && <Loading setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
      {page === 2 && <Boarding />}
    </>
  );
};

export default Onboarding;
