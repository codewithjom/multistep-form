type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <div>
      <label>Street</label>
      <br />
      <input
        type="text"
        autoFocus
        required
        className="border"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <br />
      <label>City</label>
      <br />
      <input
        type="text"
        required
        className="border"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <br />
      <label>State</label>
      <br />
      <input
        type="text"
        required
        className="border"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <br />
      <label>Zip</label>
      <br />
      <input
        type="text"
        required
        className="border"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </div>
  );
}
