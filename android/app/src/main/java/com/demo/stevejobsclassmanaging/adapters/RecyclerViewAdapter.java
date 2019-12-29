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
import com.demo.stevejobsclassmanaging.activities.UserActivity;
import com.demo.stevejobsclassmanaging.model.User;

import java.util.List;


public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.MyViewHolder> {

    private Context mContext ;
    private List<User> mData ;
    RequestOptions option;


    public RecyclerViewAdapter(Context mContext, List<User> mData) {
        this.mContext = mContext;
        this.mData = mData;

        // Request option for Glide
        option = new RequestOptions().centerCrop().placeholder(R.drawable.loading_shape).error(R.drawable.loading_shape);

    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view ;
        LayoutInflater inflater = LayoutInflater.from(mContext);
        view = inflater.inflate(R.layout.user_row_item,parent,false) ;
        final MyViewHolder viewHolder = new MyViewHolder(view) ;
        viewHolder.view_container.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent i = new Intent(mContext, UserActivity.class);
                i.putExtra("anime__id",mData.get(viewHolder.getAdapterPosition()).get_id());
                i.putExtra("anime_fiscalCode",mData.get(viewHolder.getAdapterPosition()).getFiscalCode());
                i.putExtra("anime_name",mData.get(viewHolder.getAdapterPosition()).getName());
                i.putExtra("anime_surname",mData.get(viewHolder.getAdapterPosition()).getSurname());
                i.putExtra("anime_dateOfBirth",mData.get(viewHolder.getAdapterPosition()).getDateOfBirth());
                i.putExtra("anime_type",mData.get(viewHolder.getAdapterPosition()).getType());
                //i.putExtra("anime_img",mData.get(viewHolder.getAdapterPosition()).getImage_url());
                mContext.startActivity(i);
            }
        });
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {

        holder.name.setText(mData.get(position).getName());
        holder.surname.setText(mData.get(position).getSurname());

        // Load Image from the internet and set it into Imageview using Glide

        //Glide.with(mContext).load(mData.get(position).getImage_url()).apply(option).into(holder.img_thumbnail);
    }

    @Override
    public int getItemCount() {
        return mData.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        TextView name ;
        TextView surname;
        //ImageView img_thumbnail;
        LinearLayout view_container;

        public MyViewHolder(View itemView) {
            super(itemView);

            view_container = itemView.findViewById(R.id.container);
            name = itemView.findViewById(R.id.name);
            surname = itemView.findViewById(R.id.surname);
            //img_thumbnail = itemView.findViewById(R.id.thumbnail);

        }
    }

}
