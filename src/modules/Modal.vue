<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-container">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>