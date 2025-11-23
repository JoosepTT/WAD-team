<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const passwordTouched = ref(false)
const message = ref('')

const checks = computed(() => {
	const pw = password.value || ''
	const lengthOK = pw.length >= 8 && pw.length < 15
	const startsWithUpper = /^[A-Z]/.test(pw)
	const hasUpper = /[A-Z]/.test(pw)
	const lowerMatches = pw.match(/[a-z]/g) || []
	const hasTwoLower = lowerMatches.length >= 2
	const hasNumber = /[0-9]/.test(pw)
	const hasUnderscore = pw.includes('_')

	const unmet = []
	if (!lengthOK) unmet.push('The password should be at least 8 characters and less than 15 characters')
	if (!hasUpper) unmet.push('Includes at least one uppercase alphabet character')
	if (!hasTwoLower) unmet.push('Includes at least two lowercase alphabet characters')
	if (!hasNumber) unmet.push('Includes at least one numeric value')
	if (!startsWithUpper) unmet.push('It should start with an uppercase alphabet')
	if (!hasUnderscore) unmet.push('It should include the character "_"')

	return {
		lengthOK,
		hasUpper,
		hasTwoLower,
		hasNumber,
		startsWithUpper,
		hasUnderscore,
		unmet,
		isValid: unmet.length === 0 && pw.length > 0,
	}
})

const isValid = computed(() => checks.value.isValid)

function onInput() {
	passwordTouched.value = true
}

function onSubmit() {
	passwordTouched.value = true
	if (!isValid.value) return
	// In a real app, submit the form here.
	message.value = `Signup successful for ${email.value || 'user'}`
}
</script>

<template>
	<div class="signup">
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Arial, Helvetica, sans-serif;
					<label for="password">Password</label>
	.card {
		background: #eef6e8;
		padding: 22px 26px;
		border-radius: 12px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
		min-width: 320px;
		max-width: 520px;
	}
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 12px 18px;
		align-items: center;
		margin-bottom: 12px;
	}
	label {
		text-align: right;
		padding-right: 8px;
		font-weight: 600;
	}
	input[type="text"],
	input[type="password"] {
		padding: 10px 12px;
		font-size: 14px;
		border: 1px solid #cfcfcf;
		border-radius: 8px;
	}
	.validation {
		margin-bottom: 12px;
		text-align: center;
	}

		<p class="message" v-if="message">{{ message }}</p>
	</div>
</template>

<style scoped>
.signup {
	max-width: 420px;
	.center-btn {
		display: block;
		margin: 10px auto 0 auto;
		background: #5b9bd5;
		color: white;
		border: none;
		padding: 10px 28px;
		border-radius: 16px;
		font-weight: 700;
	}
	.center-btn[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.message {
		margin-top: 12px;
		color: #0055aa;
		text-align: center;
	}
	display: flex;
	flex-direction: column;
}
label {
	margin-bottom: 6px;
	font-weight: 600;
}
input[type="text"],
input[type="password"] {
	padding: 8px 10px;
	font-size: 14px;
	border: 1px solid #bbb;
	border-radius: 4px;
}
.validation {
	margin-bottom: 12px;
}
.invalid {
	color: #000000;
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