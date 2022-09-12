const express = require("express");
const journal = express.Router();
const {
  getAllEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../queries/entry.js");



journal.get("/", async (req, res) => {
  const allEntries = await getAllEntries();
  if (allEntries[0]) {
    res.status(200).json(allEntries);
  } else {
    res
      .status(500)
      .json({ error: "server error - journal controller (line11)" });
  }
});

journal.get("/:id", async (req, res) => {
  const { id } = req.params;
  const entry = await getEntry(id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "NOT FOUND- journal controller (line21)" });
  }
});

journal.post("/", async (req, res) => {
  
  try {
    const entry = await createEntry(req.body);
    res.json(entry);
  } catch (error) {
    return error;
  }
});

journal.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEntry = await deleteEntry(id);
  if (deletedEntry.id) {
    res.status(200).json(deletedEntry);
  } else {
    res.status(404).json("Entry Not Found= journal controller (line40)");
  }
});

journal.put("/:id", async (req, res) => {
  const {id} = req.params;
  const updatedEntry = await updateEntry(req.body, id);
  if (updatedEntry.id) {
    res.status(200).json(updatedEntry);
  } else {
    res
      .status(404)
      .json({
        error:
          "Journal entry not updating for some reason -journal controller (line50)",
      });
  }
});

module.exports = journal;
