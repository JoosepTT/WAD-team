<template>
  <div class="signup-bg">
    <div class="signup">
      <h1>Sign Up</h1>
      <form @submit.prevent="onSubmit" novalidate>
        <div class="field">
          <label for="username">E-mail</label>
          <input id="username" v-model="username" type="email" required />
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            @blur="passwordTouched = true"
            autocomplete="new-password"
            required
          />
        </div>

        <div class="validation" v-if="passwordTouched" aria-live="polite">
          <p v-if="checks.isValid" class="valid">Password is valid.</p>
          <p v-else class="invalid">
            The password is not valid:
            <ul>
              <li v-for="(rule, index) in checks.unmet" :key="index">{{ rule }}</li>
            </ul>
          </p>
        </div>

        <button type="submit" :disabled="!checks.isValid">Sign Up</button>
      </form>

      <p class="message" v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const username = ref('')
const password = ref('')
const passwordTouched = ref(false)
const message = ref('')

const passwordRules = [
  { test: pw => pw.length >= 8 && pw.length < 15, message: '8-14 characters' },
  { test: pw => /^[A-Z]/.test(pw), message: 'Starts with uppercase letter' },
  { test: pw => (pw.match(/[A-Z]/g) || []).length >= 1, message: 'At least 1 uppercase letter' },
  { test: pw => (pw.match(/[a-z]/g) || []).length >= 2, message: 'At least 2 lowercase letters' },
  { test: pw => /[0-9]/.test(pw), message: 'At least 1 number' },
  { test: pw => pw.includes('_'), message: 'Includes "_"' },
]

const checks = computed(() => {
  const pw = password.value || ''
  const unmet = passwordRules.filter(rule => !rule.test(pw)).map(rule => rule.message)
  return { unmet, isValid: unmet.length === 0 && pw.length > 0 }
})

function onSubmit() {
  passwordTouched.value = true
  if (!checks.value.isValid) return
  message.value = `Signup successful for ${username.value || 'user'}`
}
</script>

<style scoped>


.signup {
  max-width: 420px;
  margin: 24px auto;
  padding: 18px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(255, 255, 255, 0.55);
}

.field {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #bbb;
  border-radius: 4px;
}

input:focus {
  border-color: #0055aa;
  outline: none;
}

.validation {
  margin-bottom: 12px;
}

.invalid {
  color: #b00020;
  font-weight: 600;
}

.valid {
  color: #0a7a0a;
  font-weight: 600;
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.message {
  margin-top: 12px;
  color: #0055aa;
}
</style>
