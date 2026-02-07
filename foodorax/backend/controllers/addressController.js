const Address = require('../models/Address');

// @desc    Add new address
// @route   POST /api/address/add
// @access  Private
const addAddress = async (req, res) => {
    const {
        fullName,
        phone,
        state,
        city,
        pincode,
        fullAddress,
        landmark,
    } = req.body;

    const address = new Address({
        user: req.user._id,
        fullName,
        phone,
        state,
        city,
        pincode,
        fullAddress,
        landmark,
    });

    const createdAddress = await address.save();
    res.status(201).json(createdAddress);
};

// @desc    Get user addresses
// @route   GET /api/address/list
// @access  Private
const getAddresses = async (req, res) => {
    const addresses = await Address.find({ user: req.user._id });
    res.json(addresses);
};

// @desc    Delete address
// @route   DELETE /api/address/delete/:id
// @access  Private
const deleteAddress = async (req, res) => {
    const address = await Address.findById(req.params.id);

    if (address) {
        if (address.user.toString() !== req.user._id.toString()) {
            res.status(401).json({ message: 'Not authorized' });
            return;
        }
        await address.deleteOne();
        res.json({ message: 'Address removed' });
    } else {
        res.status(404).json({ message: 'Address not found' });
    }
};

// @desc    Update address
// @route   PUT /api/address/update/:id
// @access  Private
const updateAddress = async (req, res) => {
    const address = await Address.findById(req.params.id);

    if (address) {
        if (address.user.toString() !== req.user._id.toString()) {
            res.status(401).json({ message: 'Not authorized' });
            return;
        }

        address.fullName = req.body.fullName || address.fullName;
        address.phone = req.body.phone || address.phone;
        address.state = req.body.state || address.state;
        address.city = req.body.city || address.city;
        address.pincode = req.body.pincode || address.pincode;
        address.fullAddress = req.body.fullAddress || address.fullAddress;
        address.landmark = req.body.landmark || address.landmark;

        const updatedAddress = await address.save();
        res.json(updatedAddress);
    } else {
        res.status(404).json({ message: 'Address not found' });
    }
};

module.exports = {
    addAddress,
    getAddresses,
    deleteAddress,
    updateAddress,
};
