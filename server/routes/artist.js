const router = require('express').Router();

const artist = require('../models/artist');

router.get('/getAll', async (req, res) => {
    const data = await artist.find();

    if (data) {
        return res.status(200).send({ success: true, data: data });
    } else {
        return res.status(400).send({ success: false, msg: 'Data not found' });
    }
});

router.post('/save', async (req, res) => {
    const newArtist = artist({
        name: req.body.name,
        imageURL: req.body.imageURL,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
    });

    try {
        const savedArtist = await newArtist.save();
        return res.status(200).send({ success: true, artist: savedArtist });
    } catch (error) {
        return res.status(400).send({ success: false, msg: error });
    }
});

router.get('/getOne/:id', async (req, res) => {
    const filter = { _id: req.params.id };

    const data = await artist.findOne(filter);

    if (data) {
        return res.status(200).send({ success: true, artist: data });
    } else {
        return res.status(400).send({ success: false, msg: 'Artist not found!' });
    }
});

router.put('/update/:id', async (req, res) => {
    const filter = { _id: req.params.id };

    const options = {
        upsert: true,
        new: true,
    };

    try {
        const result = await artist.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
            },
            options,
        );
        return res.status(200).send({ success: true, data: result });
    } catch (error) {
        return res.status(400).send({ success: false, msg: error });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const filter = { _id: req.params.id };

    const result = await artist.deleteOne(filter);

    if (result) {
        return res.status(200).send({ success: true, msg: 'Data delete successfully!', data: result });
    } else {
        return res.status(400).send({ success: false, msg: 'Data not found' });
    }
});

module.exports = router;
