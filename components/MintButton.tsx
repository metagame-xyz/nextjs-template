import React, { useEffect, useState } from 'react'

import { Button } from 'grommet'

export const enum MintStatus {
    unknown = 'unknown',
    loading = 'loading',
    can_mint = 'Mint for 0.02 ETH',
    minting = 'Minting...',
    minted = 'Minted',
    metabot = 'Get allowlisted',
    processing = 'Processing...',
}

const MintButton = ({ mintStatus, clickable, action }) => {
    const [actionLabel, setActionLabel] = useState<string>(mintStatus)

    useEffect(() => {
        setActionLabel(mintStatus)
    }, [mintStatus])

    return (
        <div
            onMouseEnter={() => clickable && setActionLabel(`> ${mintStatus} <`)}
            onMouseLeave={() => setActionLabel(mintStatus)}
            style={{ width: '100%' }}
        >
            <Button
                onClick={action}
                size="large"
                primary
                disabled={!clickable}
                label={actionLabel}
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default MintButton
