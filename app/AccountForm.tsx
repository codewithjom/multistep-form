type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({ email, password, updateFields }: AccountFormProps) {
  return (
    <div>
      <label>Email</label>
      <br />
      <input
        type="email"
        autoFocus
        required
        className="border"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        required
        className="border"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </div>
  );
}
