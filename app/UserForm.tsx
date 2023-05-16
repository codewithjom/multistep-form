type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <div>
      <label>First name</label>
      <br />
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        className="border"
      />
      <br />
      <label>Last name</label>
      <br />
      <input
        type="text"
        required
        value={lastName}
        className="border"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <br />
      <label>Age</label>
      <br />
      <input
        type="number"
        min={1}
        required
        value={age}
        className="border"
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </div>
  );
}
