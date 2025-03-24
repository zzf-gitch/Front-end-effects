<template>
    <vxe-table border show-overflow highlight-hover-row ref="xTable1" height="600">
        <vxe-column type="seq" width="100"></vxe-column>
        <vxe-column field="name" title="Names" sortable></vxe-column>
        <vxe-column field="role" title="Roles"></vxe-column>
        <vxe-column field="sex" title="Sexs"></vxe-column>
    </vxe-table>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import XEUtils from "xe-utils";

const mockList1 = ref([])
for (let i = 0; i < 1000; i++) {
    mockList1.value.push({
        name: "Test" + i,
        role: "Developer",
        sex: "男",
    });
}

const xTable1 = ref(null);

onMounted(() => {
    nextTick(() => {
        const table = xTable1.value;
        console.log(table);
        if (table) {
            table.loadData(XEUtils.clone(mockList1.value, true));
        }
    });
});
</script>

<style></style>

