# job_recommendation.py
import pandas as pd
from sklearn.neighbors import NearestNeighbors

# Sample data for job recommendations
user_data = pd.DataFrame({
    'user_id': [1, 2, 3],
    'skills': ['cleaning, gardening', 'hair styling, braiding', 'washing, cleaning'],
})

job_data = pd.DataFrame({
    'job_id': [101, 102, 103],
    'required_skills': ['gardening', 'braiding', 'cleaning'],
})

# Create a simple job matching model
def match_jobs(user_skills, job_skills):
    knn = NearestNeighbors(n_neighbors=1, metric='cosine').fit(job_skills)
    distances, indices = knn.kneighbors(user_skills)
    return indices.flatten()

# This function could be further enhanced to perform the actual recommendation
def recommend_jobs(user_id):
    user_skills = user_data[user_data['user_id'] == user_id]['skills']
    job_matches = match_jobs(user_skills, job_data['required_skills'])
    return job_data.iloc[job_matches]