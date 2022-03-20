import { useState } from "react";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div>
      <h3>Enter to WinWin</h3>
      <div>
        <div>
          <h5>Enter using:</h5>
          <div>
            <button onClick={onEmailClick}>Email</button>
            <button onClick={onPhoneClick}>Phone</button>
          </div>
        </div>
        <form>
          <label>
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div>
            {method === "email" ? <input type="email" required /> : null}
            {method === "phone" ? (
              <div>
                <span>+82</span>
                <input type="number" required />
              </div>
            ) : null}
          </div>
          <button>
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
        <div>
          <div>
            <div />
            <div>
              <span>Or enter with</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}