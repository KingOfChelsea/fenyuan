    <template>
        <div class="register">
            <van-nav-bar title="广东汾源会员注册" />

            <div class="form-container">
                <van-form @submit="onSubmit" ref="form">
                    <van-field v-model="form.username" name="username" label="用户名" placeholder="请输入用户名" required clearable
                        :error-message="usernameError" @blur="validateUsername" :right-icon="usernameValid ? 'success' : ''"
                        left-icon="manager" />


                    <van-field v-model="form.email" name="email" label="邮箱" placeholder="请输入邮箱" type="email" required
                        clearable :error-message="emailError" @blur="validateEmail"
                        :right-icon="emailValid ? 'success' : ''" left-icon="envelop-o" />

                    <van-field v-model="form.phone" name="phone" label="电话" placeholder="请输入电话" type="tel" required
                        clearable :error-message="phoneError" @blur="validatePhone"
                        :right-icon="phoneValid ? 'success' : ''" left-icon="phone-o" />

                    <van-field v-model="form.password" name="password" label="密码" placeholder="请输入密码" type="password"
                        required clearable :error-message="passwordError" @blur="validatePassword"
                        :right-icon="passwordValid ? 'success' : ''" />

                    <van-button type="primary" native-type="submit" block class="register-button">立即注册</van-button>
                </van-form>
            </div>

            <van-toast v-model:show="toastVisible" :message="toastMessage" />
        </div>
    </template>

    <script setup>
    import { ref, watch } from 'vue';

    const form = ref({
        username: '',
        email: '',
        phone: '',
        password: '',
    });

    const toastVisible = ref(false);
    const toastMessage = ref('');
    const usernameError = ref('');
    const emailError = ref('');
    const phoneError = ref('');
    const passwordError = ref('');
    const usernameValid = ref(false);
    const emailValid = ref(false);
    const phoneValid = ref(false);
    const passwordValid = ref(false);

    const validateUsername = () => {
        usernameError.value = form.value.username.length < 3 ? '用户名至少3个字符' : '';
        usernameValid.value = !usernameError.value;
    };

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailError.value = !emailPattern.test(form.value.email) ? '请输入有效的邮箱' : '';
        emailValid.value = !emailError.value;
    };

    const validatePhone = () => {
        const phonePattern = /^\d{10,15}$/;
        phoneError.value = !phonePattern.test(form.value.phone) ? '请输入有效的电话号码' : '';
        phoneValid.value = !phoneError.value;
    };

    const validatePassword = () => {
        passwordError.value = form.value.password.length < 6 ? '密码至少6个字符' : '';
        passwordValid.value = !passwordError.value;
    };

    // 确认提交 
    const onSubmit = async () => {
        validateUsername();
        validateEmail();
        validatePhone();
        validatePassword();

        if (usernameError.value || emailError.value || phoneError.value || passwordError.value) {
            toastMessage.value = '请检查输入的内容';
            toastVisible.value = true;
            return;
        }

        try {
            await registerUser(form.value);
            toastMessage.value = '注册成功，欢迎光临青花汾！';
        } catch (error) {
            toastMessage.value = '注册失败：' + error.message;
        }
        toastVisible.value = true;
    };

    const registerUser = async (userData) => {
        console.log('注册用户数据：', userData);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };


    </script>

    <style scoped>
    .register {
        background: url('path/to/your/background-image.jpg') no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
        padding: 16px;
        box-sizing: border-box;
    }

    .form-container {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 8px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        padding: 20px;
        margin-top: 20px;
    }

    .register-button {
        margin-top: 20px;
        background-color: #2e86de;
        color: white;
    }
    </style>