package com.demo.stevejobsclassmanaging.adapters;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.bumptech.glide.request.RequestOptions;
import com.demo.stevejobsclassmanaging.R;
import com.demo.stevejobsclassmanaging.activities.SubjectsActivity;
import com.demo.stevejobsclassmanaging.model.Subjects;


import java.util.List;

public class RecyclerViewAdapterSubjects extends RecyclerView.Adapter<RecyclerViewAdapterSubjects.MyViewHolder> {

    private Context mContext ;
    private List<Subjects> mData ;
    RequestOptions option;


    public RecyclerViewAdapterSubjects(Context mContext, List<Subjects> mData) {
        this.mContext = mContext;
        this.mData = mData;

        option = new RequestOptions().centerCrop().placeholder( R.drawable.loading_shape).error(R.drawable.loading_shape);

    }

    @Override
    public RecyclerViewAdapterSubjects.MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view ;
        LayoutInflater inflater = LayoutInflater.from(mContext);
        view = inflater.inflate(R.layout.subjects_row_item,parent,false) ;
        final RecyclerViewAdapterSubjects.MyViewHolder viewHolder = new RecyclerViewAdapterSubjects.MyViewHolder(view) ;
        viewHolder.view_container.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent i = new Intent(mContext, SubjectsActivity.class);
                i.putExtra("_idSubjects",mData.get(viewHolder.getAdapterPosition()).get_id());
                i.putExtra("nameSubjects",mData.get(viewHolder.getAdapterPosition()).getName());
                i.putExtra("hoursSubjects",mData.get(viewHolder.getAdapterPosition()).getHours());
                mContext.startActivity(i);
            }
        });
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(RecyclerViewAdapterSubjects.MyViewHolder holder, int position) {

        holder.name.setText(mData.get(position).getName());

    }

    @Override
    public int getItemCount() {
        return mData.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        TextView name ;
        LinearLayout view_container;

        public MyViewHolder(View itemView) {
            super(itemView);

            view_container = itemView.findViewById(R.id.container);
            name = itemView.findViewById(R.id.nameSubjects);
        }
    }



}
