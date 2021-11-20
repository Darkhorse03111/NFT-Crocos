import React from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ethers } from 'ethers'
import Web3 from 'web3'
import Web3Modal from "web3modal";
import { getImg } from "../../hook/Helper";
import styles from './Home.module.sass';
import { CustomButton } from "../../components/CustomButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const itemData = [
    {
        img: 'home/nft.png',
        title: 'Breakfast',
    },
    {
        img: 'home/nft.png',
        title: 'Burger',
    },
    {
        img: 'home/nft.png',
        title: 'Camera',
    },
    {
        img: 'home/nft.png',
        title: 'Coffee',
    },
    {
        img: 'home/nft.png',
        title: 'Hats',
    }
];

const StandardImageList = () => {
    return (
        <ImageList sx={{ width: 'auto', height: 450, padding: '50px' }} cols={4}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <div className={styles.image_card}>
                        <img
                            src={getImg(item.img)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            position="below"
                        />
                    </div>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export const Home = () => {

    const [open, setOpen] = React.useState(false);

    const onClickPick = () => {
        setOpen(true)
    }

    const onClickHarvest = () => {
        console.log('clicked')
    }

    const onClickWithdraw = () => {
        console.log('clicked')
    }

    return (
        <div className={styles.div} style={{ backgroundImage: `url(${getImg('home/bg.png')})` }}>
            <div className={styles.card}>
                <div className={styles.title}>Stake NFT get CROCOS</div>
                <img src={getImg('home/nft.png')} alt="nft" />
                <CustomButton value="Pick NFT" onClick={onClickPick} />
                <div className={styles.box}>
                    <h5>Reward</h5>
                    <p>0.0000001 CROCOS</p>
                    <CustomButton value="Harvest" onClick={onClickHarvest} />
                </div>
                <CustomButton value="Withdraw" onClick={onClickWithdraw} />
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <StandardImageList />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}