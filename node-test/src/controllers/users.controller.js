// Demo: In-Memory "Datenbank"
const users = [{ id: 1, name: "Sarah" }, { id: 2, name: "Michael" }];

exports.listUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "name ist erforderlich" });
    const id = users.at(-1)?.id + 1 || 1;
    const user = { id, name };
    users.push(user);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};