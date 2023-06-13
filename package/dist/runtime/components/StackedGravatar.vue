<template>
    <div>
        <div v-if="uids && uids.length > 0">
            <!--Start of display avatars inline -->
            <div class="isolate flex -space-x-2 overflow-hidden">
                <template v-for="(uid, index) in uids" :key="index">
                    <div v-if="index < maxToShow">
                        <!-- Start of an UserGravatar -->
                        <AvatarUser :uid="uid" :size="size"></AvatarUser>
                        <!-- End of an UserGravatar -->
                    </div>
                    <!-- Start of dropdown button if there are more than maxToShow users -->
                </template>

                <div v-if="uids.length > maxToShow">
                    <div class="flex items-center cursor-pointer">
                        <span
                            class="bg-skin-muted/90 flex items-center justify-center rounded-full text-center text-skin-white w-[33px] h-[33px] text-[13px] border-2 font-medium relative hover:z-10"
                            @click="usersDropdown = !usersDropdown"
                            >+{{ uids.length - maxToShow }}</span
                        >
                    </div>
                    <!-- Start of an users dropdown -->
                    <div v-if="usersDropdown" class="right-0 bg-skin-white rounded-lg shadow-lg z-10 py-1.5 border border-skin-base/10 overflow-auto max-h-[350px] w-[200px]">
                        <div aria-orientation="vertical" aria-labelledby="options-menu">
                            <div v-for="(uid, index) in uids" :key="index">
                                <a v-if="index >= maxToShow" href="#" class="block px-3.5 py-1 text-sm text-skin-secondary">
                                    <div class="flex">
                                        <AgileUser :uid="uid" :size="size" :show-name="true"></AgileUser>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- End of an users dropdown -->
                </div>
            </div>
            <!-- End of dropdown button -->
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    maxToShow: number
    uids: string[]
    size: number
}
// Taking maxToShow as Props
withDefaults(defineProps<Props>(), {
    // Max members to show to in inline
    maxToShow: 4,
    size: 32,
})

// To show an users dropdown
const usersDropdown = ref(false)
</script>
