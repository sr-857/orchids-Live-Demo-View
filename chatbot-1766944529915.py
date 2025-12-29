# AstraGuard Chatbot Logic
# Version: 1766944529915

def evaluate_prompt(prompt):
    # Simulated security check
    risk_score = 0.0
    if "ignore previous instructions" in prompt.lower():
        risk_score = 0.95
    elif "bypass" in prompt.lower():
        risk_score = 0.88
    elif "email" in prompt.lower() or "password" in prompt.lower():
        risk_score = 0.75
    
    return {
        "score": risk_score,
        "action": "BLOCK" if risk_score > 0.8 else "ALLOW",
        "reason": "Security violation detected" if risk_score > 0.8 else "Safe"
    }
