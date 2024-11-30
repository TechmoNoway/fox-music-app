const router = require('express').Router();

const song = require('../models/song');

router.get('/getAll', async (req, res) => {
    const result = await song.find();

    try {
        res.status(200).send({ success: true, data: result });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});

router.post('/save', async (req, res) => {
    const newSong = new song({
        name: req.body.name,
        imageURL: req.body.imageURL,
        songURL: req.body.songURL,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
    });

    try {
        const savedSong = await newSong.save();
        res.status(200).send({ success: true, data: savedSong });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
});

router.get('/getOne/:id', async (req, res) => {
    const filter = { _id: req.params.id };

    const data = await song.findOne(filter);

    if (data) {
        return res.status(200).send({ success: true, song: data });
    } else {
        return res.status(400).send({ success: false, msg: 'Song not found!' });
    }
});

router.put('/update/:id', async (req, res) => {
    const filter = { _id: req.params.id };

    const options = {
        upsert: true,
        new: true,
    };

    try {
        const result = await song.updateOne(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                songURL: req.body.songURL,
                album: req.body.album,
                artist: req.body.artist,
                language: req.body.language,
                category: req.body.category,
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

    try {
        const result = await song.deleteOne(filter);
        return res.status(200).send({ success: true, msg: 'Data delete successfully!', data: result });
    } catch (error) {
        return res.status(400).send({ success: false, msg: error });
    }
});

module.exports = router;
