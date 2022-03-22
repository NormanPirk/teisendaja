<template>
  <div class="small">
    <ConvButton
      left="¬∀xF(x)"
      right="∃x¬F(x)"
      conversionTypeL="PS1_11"
      conversionTypeR="PS1_12"
    ></ConvButton>
    <ConvButton
      left="¬∃xF(x)"
      right="∀x¬F(x)"
      conversionTypeL="PS1_21"
      conversionTypeR="PS1_22"
    ></ConvButton>
    <ConvButton
      left="∀x(F(x)∧G(x))"
      right="∀xF(x)∧∀xG(x)"
      conversionTypeL="PS2_11"
      conversionTypeR="PS2_21"
    ></ConvButton>
    <ConvButton
      left="∃x(F(x)∨G(x))"
      right="∃xF(x)∨∀xG(x)"
      conversionTypeL="PS2_12"
      conversionTypeR="PS2_22"
    ></ConvButton>
    <ConvButton
      left="∀x(F(x)∧G)"
      right="∀xF(x)∧G"
      conversionTypeL="PS3_1"
      conversionTypeR="PS3_2"
    ></ConvButton>
    <ConvButton
      left="∀x(F(x)∨G)"
      right="∀xF(x)∨G"
      conversionTypeL="PS3_3"
      conversionTypeR="PS3_4"
    ></ConvButton>
    <ConvButton
      left="∃x(F(x)∧G)"
      right="∃xF(x)∧G"
      conversionTypeL="PS3_5"
      conversionTypeR="PS3_6"
    ></ConvButton>
    <ConvButton
      left="∃x(F(x)∨G)"
      right="∃xF(x)∨G"
      conversionTypeL="PS3_7"
      conversionTypeR="PS3_8"
    ></ConvButton>
    <ConvButton
      left="∀x(F(x)⇒G)"
      right="∃xF(x)⇒G"
      conversionTypeL="PS4_1"
      conversionTypeR="PS4_2"
    ></ConvButton>
    <ConvButton
      left="∃x(F(x)⇒G)"
      right="∀xF(x)⇒G"
      conversionTypeL="PS4_3"
      conversionTypeR="PS4_4"
    ></ConvButton>
    <ConvButton
      left="∀x(F⇒G(x))"
      right="F⇒∀xG(x)"
      conversionTypeL="PS4_5"
      conversionTypeR="PS4_6"
    ></ConvButton>
    <ConvButton
      left="∃x(F⇒G(x))"
      right="F⇒∃xG(x)"
      conversionTypeL="PS4_7"
      conversionTypeR="PS4_8"
    ></ConvButton>
    <ConvButton
      left="∀xF(x)"
      right="∀yF(y)"
      conversionTypeL="PS5_1"
      conversionTypeR="PS5_1"
    ></ConvButton>
    <ConvButton
      left="∃xF(x)"
      right="∃yF(y)"
      conversionTypeL="PS5_2"
      conversionTypeR="PS5_2"
    ></ConvButton>
    <ConvButton
      left="∀x∀yF(x,y)"
      right="∀y∀xF(x,y)"
      conversionTypeL="PS6_1"
      conversionTypeR="PS6_1"
    ></ConvButton>
    <ConvButton
      left="∃x∃yF(x,y)"
      right="∃y∃xF(x,y)"
      conversionTypeL="PS6_2"
      conversionTypeR="PS6_2"
    ></ConvButton>
  </div>
</template>

<script>
import ConvButton from "./ConvButton.vue";

export default {
  name: "PredicateLogicButtons",
  data() {
    return {};
  },
  components: {
    ConvButton,
  },
};
</script>

<style scoped>
.small {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
