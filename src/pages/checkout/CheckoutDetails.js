import { useState } from "react";
import styles from "./CheckoutDetails.module.css";
import Card from "../../components/card/Card";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch } from "react-redux";
import { SAVE_BILLING_ADDRESS, SAVE_SHIPPING_ADDRESS } from "../../redux/slice/checkoutSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";


const initialAddressState = {
  name: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  phone: "",
};

const CheckoutDetails = () => {
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShipping = (e) => {
    const {name, value} = e.target;
    setShippingAddress({
        ...shippingAddress,
        [name]: value
    })
  };

  const handleBilling = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
    dispatch(SAVE_BILLING_ADDRESS(billingAddress));
    navigate("/checkout");
  };

  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Checkout Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* SHIPPING ADDRESS */}
            <Card cardClass={styles.card}>
              <h3>Shipping Address</h3>
              <label>Recipient Name:</label>
              <input
                type="text"
                required
                placeholder="Recipient Name"
                name="name"
                value={shippingAddress.name}
                onChange={(e) => handleShipping(e)}
              />
              <label>Address Line 1:</label>
              <input
                type="text"
                required
                placeholder="Address Line 1"
                name="line1"
                value={shippingAddress.line1}
                onChange={(e) => handleShipping(e)}
              />
              <label>Address Line 2:</label>
              <input
                type="text"
                placeholder="Address Line 2"
                name="line2"
                value={shippingAddress.line2}
                onChange={(e) => handleShipping(e)}
              />
              <label>City:</label>
              <input
                type="text"
                required
                placeholder="City"
                name="city"
                value={shippingAddress.city}
                onChange={(e) => handleShipping(e)}
              />
              <label>State:</label>
              <input
                type="text"
                required
                placeholder="State"
                name="state"
                value={shippingAddress.state}
                onChange={(e) => handleShipping(e)}
              />
              <label>Postal Code:</label>
              <input
                type="text"
                required
                placeholder="Postal Code"
                name="postal_code"
                value={shippingAddress.postal_code}
                onChange={(e) => handleShipping(e)}
              />
              <label>Country</label>
              <CountryDropdown
                valueType="short"
                className={styles.select}
                value={shippingAddress.country}
                onChange={(val) =>
                  handleShipping({
                    target: {
                      name: "country",
                      value: val,
                    },
                  })
                }
              />
              <label>Phone:</label>
              <input
                type="text"
                required
                placeholder="Phone"
                name="phone"
                value={shippingAddress.phone}
                onChange={(e) => handleShipping(e)}
              />
            </Card>

            {/* BILLING ADDRESS */}
            <Card cardClass={styles.card}>
              <h3>Billing Address</h3>
              <label>Name:</label>
              <input
                type="text"
                required
                placeholder="Recipient Name"
                name="name"
                value={billingAddress.name}
                onChange={(e) => handleBilling(e)}
              />
              <label>Address Line 1:</label>
              <input
                type="text"
                required
                placeholder="Address Line 1"
                name="line1"
                value={billingAddress.line1}
                onChange={(e) => handleBilling(e)}
              />
              <label>Address Line 2:</label>
              <input
                type="text"
                placeholder="Address Line 2"
                name="line2"
                value={billingAddress.line2}
                onChange={(e) => handleBilling(e)}
              />
              <label>City:</label>
              <input
                type="text"
                required
                placeholder="City"
                name="city"
                value={billingAddress.city}
                onChange={(e) => handleBilling(e)}
              />
              <label>State:</label>
              <input
                type="text"
                required
                placeholder="State"
                name="state"
                value={billingAddress.state}
                onChange={(e) => handleBilling(e)}
              />
              <label>Postal Code:</label>
              <input
                type="text"
                required
                placeholder="Postal Code"
                name="postal_code"
                value={billingAddress.postal_code}
                onChange={(e) => handleBilling(e)}
              />
              <label>Country</label>
              <CountryDropdown
                valueType="short"
                className={styles.select}
                value={billingAddress.country}
                onChange={(val) =>
                  handleBilling({
                    target: {
                      name: "country",
                      value: val,
                    },
                  })
                }
              />
              <label>Phone:</label>
              <input
                type="text"
                required
                placeholder="Phone"
                name="phone"
                value={billingAddress.phone}
                onChange={(e) => handleBilling(e)}
              />
              <button type="submit" className="--btn --btn-primary">Proceed To Checkout</button>
            </Card>
          </div>
          <div>
            <Card cardClass={styles.card}>
                <CheckoutSummary />
            </Card>
          </div>
        </form>
      </div>
    </section>
  );
};
export default CheckoutDetails;
