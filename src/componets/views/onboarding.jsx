import { EditorialTitle } from "../UI/Typography";
import Button from "../UI/Button";
import styles from "./onboarding.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Interests = ['Landscape', 'Abstract', 'Watercolor', 'Figurative', 'Sculpture', 'Street Art'];

export default function Onboarding() {
    const navigate = useNavigate();
    // Usestate
    const [step, setStep] = useState('role-select');
    const [role, setRole] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedInterests, setSelectedInterests] = useState(['Sculpture']);
    const [governmentId, setGovernmentId] = useState(null);
    const [porfolioUrl, setPorfolioUrl] = useState('');

    // Handlers
    function handleRoleSelect(selectedRole) {
        setRole(selectedRole);
        setStep('credentials');
    };

    function handleCredentialsSubmit(e) {
        e.preventDefault();
        setStep('role-specific-data');
    };

    function toggleInterest(interest) {
        setSelectedInterests(prev => 
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        );
    };

    function handleFinalSubmit(e) {
        e.preventDefault();
        if (role === 'collector') {
            navigate('/feed');
        } else {
            setStep('verification')
        }
    };
    // Role Selection
    if (step === 'role-select') {
        return (
            <div className={styles.container}>
                <div className={`${styles.textCenter} ${styles.mb4}`}>
                    <EditorialTitle level="h1">
                        Choose Your Role
                    </EditorialTitle>
                    <p className={styles.subtitle}>
                        Select how you wish to experience the Unveil platform.
                    </p>
                </div>
                <div className={styles.buttonGroup}>
                    <button onClick={() => handleRoleSelect('collector')} className={styles.roleButton}>
                        <span className={styles.roleIcon}>👁️‍🗨️</span>
                        <div className={styles.roleTitle}>
                            <strong className={styles.roleTitle}>Become a Collector</strong>
                            <span className={styles.roleSubtitle}>
                                Discover, track, and unlock creative breakthrough journals.
                            </span>
                        </div>
                    </button>

                    <button onClick={() => handleRoleSelect('artist')} className={styles.roleButton}>
                        <span className={styles.roleIcon}>🎨</span>
                        <div>
                            <strong className={styles.roleTitle}>Join as an Artist</strong>
                            <span className={styles.roleSubtitle}>Publish your process narrative and mint emotional journeys.</span>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    // Credentials
    if (step === 'credentials') {
        return (
            <div className={styles.container}>
                <div className={`${styles.textCenter} ${styles.mb3}`}>
                    <EditorialTitle level="h1">Account Setup</EditorialTitle>
                    <p className={styles.subtitle}>
                        Registering profile credentials for an <strong>{role}</strong> account.
                    </p>
                </div>
                <form onSubmit={handleCredentialsSubmit} className={styles.form}>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.input}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.input}/>
                    <button type="submit" className={styles.primaryButton}>
                        Continue Registration
                    </button>
                </form>
                <button onClick={() => setStep('role-selcet')} className={styles.backLink}>
                    ← Go back to role selection
                </button>
            </div>
        );
    }
    // Role Specific field
    if (step === 'role-specific-data') {
        if (role === 'collector') {
            return (
                <div className={styles.container}>
                    <header className={styles.mb3}>
                        <EditorialTitle level="h1">Attune Your Feed</EditorialTitle>
                        <p className={styles.subtitle}>Pick the art directions that pull you in.</p>
                    </header>
                    <div className={styles.chipGrid}>
                        {Interests.map((interest) => {
                            const isChosen = selectedInterests.includes(interest);
                            return (
                                <button key={interest} type="button" onClick={() => toggleInterest(interest)} className={`${styles.chip} ${isChosen ? styles.chipChosen : ''}`}>
                                    {isChosen && <span>✓</span>}
                                    <span>interest</span>
                                </button>
                            );
                        })}
                    </div>
                    <Button variant="primary" onClick={handleFinalSubmit}>
                        Generate Feed
                    </Button>
                </div>
            );
        }
        // Artist Porfolio / Government Id
        return (
            <div className={styles.container}>
                <div className={styles.mb3}>
                    <EditorialTitle level="h1">Identity & Work</EditorialTitle>
                    <p className={styles.subtitle}>Unveil maintain a highly curated index of verified creators.</p>
                </div>
                <form onSubmit={handleFinalSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Government Issued Identification (PDF/Image)
                        <input type="file" required onChange={(e) => setGovernmentId(e.target.files[0])} className={`${styles.input} ${styles.fileInput}`} />
                    </label>
                    <label className={styles.label}>
                        Link to Existing Digital Porfolio / Archive
                        <input type="url" placeholder="https://yourwebsite.com" required value={porfolioUrl} onChange={(e) => setPorfolioUrl(e.target.value)} className={`${styles.input} ${styles.urlInput}`} />
                    </label>
                    <button type="submit" className={styles.primaryButton}>
                        Submit for Verification
                    </button>
                </form>
            </div>
        );    
    }
    // Artist Verification Waiting Screen
    if (step === 'verification') {
        return (
            <div className={`${styles.container} ${styles.textCenter} style{{ gap: '1.5rem' }}`}>
                <span className={styles.verificationIcon}>⏳</span>
                <EditorialTitle>Verification Pending</EditorialTitle>
                <p className={`${styles.subtitle} ${styles.verificationText}`}>Our editorial board is validating your portfolio metrics and submitted credentials. You will recieve an access token via email shortly.</p>
                <div className={`${styles.mt2} ${styles.w100}`}>
                    <Button variant="primary" to='/artist-dashboard'>
                        Simulate Approved: Go to Artist Dashboard
                    </Button>
                </div>
            </div>
        );
    }
    return null
}