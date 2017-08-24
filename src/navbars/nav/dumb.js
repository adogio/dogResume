this.setLeftStyle(selectQueue.leftBG, () => {
    this.setRightStyle(selectQueue.rightBG, () => {
        this.setBorder(selectQueue.border, () => {
            this.setIconType(selectQueue.icon, () => {
                this.setIconStyle(selectQueue.iconStyle, () => {
                    this.selectBars(selectQueue.bars, () => {
                        this.setPhotoBorder(selectQueue.photoBorder, () => {
                            this.setPhotoColor(selectQueue.photoColor, () => {
                                this.setPhotoBG(selectQueue.photoBG, () => {
                                    this.setPrintBorder(selectQueue.printBorder, () => {
                                        this.setPrintBorderColor(selectQueue.printBorderColor);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});