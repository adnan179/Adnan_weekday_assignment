import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const JobsSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.jdList];
    });

    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Error fetching jobs:", action.error.message);
    });
  },
});

export default JobsSlice.reducer;

export const updateJobsByCompanyName = createSlice({
  name: "jobsByCompanyName",
  initialState: {
    data: [],
  },
  reducers: {
    filterJobsByCompanyName: (state, action) => {
      const { jobs, companyName } = action.payload;
      state.data = jobs.filter((job) =>
        job.companyName.toLowerCase().includes(companyName.toLowerCase())
      );
    },
  },
});

export const { filterJobsByCompanyName } = updateJobsByCompanyName.actions;
export const updateJobsByCompanyNameReducer = updateJobsByCompanyName.reducer;
