<script>
import { def } from "@vue/shared";

    export default{
        props: {
            modelValue: { type: String, default: ""}
        }
        emits: ["submit","update: modelValue"],
        methods: {
            updateModeValue(e) {
                this.$emit("update:modelValue", e.target.value);
            }
            SubmitEvent() {
                this.$emit("update:modelValue", e.target.value);
            }
        }
    }
</script>

<template>
    <div class="input-group">
        <input type="text">
        <button>Tìm Kiếm </button>
    </div>

</template>