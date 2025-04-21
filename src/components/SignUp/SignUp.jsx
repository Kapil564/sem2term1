import { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SignUp() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    const validateField = (name, value) => {
        switch (name) {
            case 'firstName':
                return value.length < 2 ? 'First name must be at least 2 characters' : '';
            case 'lastName':
                return value.length < 2 ? 'Last name must be at least 2 characters' : '';
            case 'email':
                return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) 
                    ? 'Invalid email address' 
                    : '';
            case 'password':
                if (value.length < 8) return 'Password must be at least 8 characters';
                if (!/\d/.test(value)) return 'Password must contain at least one number';
                if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
                if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
                if (!/[!@#$%^&*]/.test(value)) return 'Password must contain at least one special character';
                return '';
            case 'confirmPassword':
                return value !== formData.password ? 'Passwords do not match' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (touched[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name, value)
            }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, formData[name])
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            newErrors[key] = validateField(key, formData[key]);
        });
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const allTouched = Object.keys(touched).reduce((acc, key) => ({
            ...acc,
            [key]: true
        }), {});
        setTouched(allTouched);

        if (validateForm()) {
            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email
            };
            login(userData);
            navigate("/");
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.firstName && errors.firstName ? 'error' : ''}
                            required
                        />
                        {touched.firstName && errors.firstName && (
                            <span className="error-message">{errors.firstName}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.lastName && errors.lastName ? 'error' : ''}
                            required
                        />
                        {touched.lastName && errors.lastName && (
                            <span className="error-message">{errors.lastName}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.email && errors.email ? 'error' : ''}
                            required
                        />
                        {touched.email && errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.password && errors.password ? 'error' : ''}
                            required
                        />
                        {touched.password && errors.password && (
                            <span className="error-message">{errors.password}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={touched.confirmPassword && errors.confirmPassword ? 'error' : ''}
                            required
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <span className="error-message">{errors.confirmPassword}</span>
                        )}
                    </div>
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}