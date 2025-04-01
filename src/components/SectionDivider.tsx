import React from 'react'

function SectionDivider() {
    return (
        <div className="relative h-1 w-full my-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
    )
}

export default SectionDivider