import React from "react";
import { Container } from "./layout";
const CallToAction = () => {
  return (
    <div className="h-[80vh] overflow-hidden relative mb-8">
      <img
        src="/black long.webp"
        className="h-full w-full object-cover absolute -z-10"
      />
      <Container>
        <div className="grid grid-cols-12 text-white">
          <div className="col-span-6 col-start-6 d">
            <p>g-shock new arrivals</p>
            <p>
              Keep up to date on the latest news from G-shock, as well as sneak
              peeks at new stock and invitations to exclusive Casio events.
            </p>
            <div>
                <input type="text" name="" id="" />
                <button>Sign up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
