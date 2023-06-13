<template>
  <div
    :class="!showName ? 'block group items-center' : 'flex group items-center'"
  >
    <!-- We will first check if image is there or error -->
    <img
      v-if="currentOrder === AvatarOrder.Image"
      :src="user.pic"
      :class="showName ? '' : ''"
      class="relative h-10 w-10 flex-shrink-0 rounded-full hover:z-10 cursor-pointer border border-skin-base/10"
      @error="error"
    />

    <!-- We will check if Gravatar will come -->
    <AgileRawGravatar
      v-if="currentOrder === AvatarOrder.Gravatar"
      :email="user?.email ? user?.email : ''"
      :class="showName ? '' : ' border  border-skin-base/10'"
      class="relative rounded-full hover:z-10 cursor-pointer"
      @error="error"
    />

    <!-- We will show a random avatar -->
    <template v-if="currentOrder === AvatarOrder.RandomAvatar">
      <AgileRandom
        :random-key="user.uid ?? uid"
        :size="props.size"
        :class="showName ? '' : ''"
        class="relative hover:z-10 rounded-full cursor-pointer border border-skin-base/10"
      ></AgileRandom>
    </template>
    <!-- Show name when name prop is true -->
    <div v-if="showName">
      <p class="text-sm ml-2 text-skin-secondary truncate">
        {{ user?.name ? user.name : 'New User' }}
      </p>
    </div>
    <!-- Name on hover when hoverName prop is true -->
    <div v-if="!showName" class="relative">
      <p
        class="invisible group-hover:visible text-md ml-2 text-skin-secondary truncate text-xs"
      ></p>
      <div
        class="border border-skin-base/10 shadow-lg absolute bg-skin-white group-hover:visible whitespace-nowrap invisible pointer-events-none px-3 py-2 rounded-lg text-center text-skin-base text-xs z-10"
      >
        {{ user?.name ? user.name : 'New User' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  uid: string
  showName?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  size: 32,
  showName: false,
})

enum AvatarOrder {
  Image,
  Gravatar,
  RandomAvatar,
}
const user = ref({})
// user.value = !props.uid ? useUserStore().user : useDomainUsersStore().getUser(props.uid)
if (!Object.keys(user.value).length) {
  user.value = {
    name:"New User",
    uid: props.uid
  }
}

const currentOrder = ref(0)
currentOrder.value = user.value?.pic
  ? AvatarOrder.Image
  : user.value.uid
  ? AvatarOrder.RandomAvatar
  : AvatarOrder.Gravatar
const error = () => {
  currentOrder.value = currentOrder.value + 1
}
</script>
