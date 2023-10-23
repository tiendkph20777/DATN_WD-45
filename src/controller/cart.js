

export const getCartDetail = async (req, res) => {
  try {

    return res.json();
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}

export const addToCart = async (req, res) => {

  try {

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}





