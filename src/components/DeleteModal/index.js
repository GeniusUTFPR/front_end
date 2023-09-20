import React from "react";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";

export const DeleteModal = ({ open, onClose, onDelete, item }) => {
  const handleDelete = () => {
    onDelete(item);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "16px",
          width: "600px",
        }}
      >
        <Typography
          sx={{ marginBottom: "24px", textAlign: "center" }}
          variant="h6"
        >
          Você realmente deseja deletar?
        </Typography>

        <Box sx={{ alignSelf: "center" }}>
          <Button
            sx={{ marginRight: "16px" }}
            onClick={handleDelete}
            variant="contained"
            size="large"
          >
            Confirmar
          </Button>
          <Button
            color="error"
            onClick={onClose}
            variant="contained"
            size="large"
          >
            Cancelar
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};